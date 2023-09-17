<?php
  use PHTMailer\PHPMailer\PHPMailer;
  use PHTMailer\PHPMailer\Exception;

  require 'PHPMailer/src/Exception.php'
  require 'PHPMailer/src/PHPMailer.php'

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/' );
  $mail->IsHTML(true);

  $mail->setFrom('', 'Твій майт');

  $mail->addAddress('yumelnyk0470@gmail.com');

  $mail->Subject = 'Заголовок';

  $body = '<h1?>Запит на консультацію</h1>';
  $body.= '<p>Ім`я: '.$POST['Name']'</p>';
  $body.= '<p>Нoмер: '.$POST['Phone']'</p>';
  $body.= '<p>Зміст: '.$POST['Message']'</p>';

  $mail->Body = $body;

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>