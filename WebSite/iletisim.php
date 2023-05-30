<?php
if(isset($_POST['kadi']) && isset($_POST['sifre'])) { 
   $kadi = $_POST['kadi'];
   $sifre = $_POST['sifre'];

      if($kadi == 'g201210020' && $sifre == '12345') { 
         session_start();
         $_SESSION['kadi'] = 'g201210020';
         $_SESSION['sifre'] = '12345';
         echo 'Giriş yaptınız! Şimdi anasayfaya girebilirsiniz.TEŞEKÜRLER..';
      } else {
         echo 'Yanlış kullanıcı adı ya da şifre';
      }
   }
 else {
   echo 'Lütfen formu kullanın';
}
?>