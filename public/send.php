<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  echo json_encode([
    'ok' => true,
    'service' => 'lead-mail',
    'mail' => function_exists('mail'),
  ]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
  $data = $_POST;
}

$name = trim((string) ($data['name'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));
$digits = preg_replace('/\D+/', '', $phone) ?? '';

if (mb_strlen($name) < 2 || strlen($digits) < 9) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'validation']);
  exit;
}

$to = 'gembitskiy81@mail.ru';
$subjectText = 'Заявка с сайта «Красим, Белим, Моем»';
$body = "Имя: {$name}\nТелефон: {$phone}\nСообщение: " . ($message !== '' ? $message : '—') . "\n";
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';

$host = $_SERVER['HTTP_HOST'] ?? 'moem-belim-krasim.by';
$host = preg_replace('/:\d+$/', '', $host) ?: 'moem-belim-krasim.by';
$from = 'noreply@' . $host;

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
  'From: ' . $from,
  'Reply-To: ' . $from,
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'mail']);
  exit;
}

echo json_encode(['ok' => true]);
