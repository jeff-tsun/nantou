// 修改檔案步驟
// 1. 前往此網址 https://script.google.com/home
// 2. 選擇 "南投網站發送表單至email" 並進入
// 3. 確認目前的程式碼與"南投網站發送表單至email"裡面的程式碼相同
// 4. 將修改好的程式碼複製到"南投網站發送表單至email"
// 5. 按下右上角的「部署 (Deploy)」→「管理部署作業 (Manage deployments)」
// 6. 將現有 Web App 編輯並發布為「新版本 (New version)」，新版程式碼才會正式生效。
// 7. 以上的註解不用複製
function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    var SECRET_KEY = '6LcZ9VotAAAAAHk2xXCgI-R2U4iSw3HEe7wtyzh5';
    var recaptchaToken = params.recaptchaToken || '';

    var verifyResponse = UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'post',
      payload: {
        secret: SECRET_KEY,
        response: recaptchaToken
      }
    });
    var verifyResult = JSON.parse(verifyResponse.getContentText());

    // score < 0.5 視為機器人，直接拒絕
    if (!verifyResult.success || verifyResult.score < 0.5) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: '機器人驗證失敗，請稍後再試。' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    // ============================================================

    var name = params.name || '未填寫';
    var gender = params.gender || '未填寫';
    var birthday = params.birthday || '未填寫';
    var township = params.township || '未填寫';
    var idNumber = params.idNumber || '未填寫';
    var company = params.company || '未填寫';
    var mobile = params.mobile || '未填寫';
    var referrer = params.referrer || '未填寫';
    var phoneWork = params.phoneWork || '未填寫';
    var phoneHome = params.phoneHome || '未填寫';
    var email = params.email || '未填寫';
    var lineId = params.lineId || '未填寫';
    var address = params.address || '未填寫';
    var applicant = params.applicant || '未填寫';

    var targetEmail = "tpna26@gmail.com";
    var subject = "【南投同鄉會】收到來自 " + name + " 的新入會申請";
    var body = "您收到一筆新的入會申請，資料如下：\n\n" +
               "【基本資料】\n" +
               "姓名: " + name + "\n" +
               "性別: " + gender + "\n" +
               "出生日期: " + birthday + "\n" +
               "身分證字號: " + idNumber + "\n" +
               "鄉鎮: " + township + "\n\n" +
               "【聯絡資訊】\n" +
               "手機: " + mobile + "\n" +
               "電話（公司）: " + phoneWork + "\n" +
               "電話（住宅）: " + phoneHome + "\n" +
               "E-mail: " + email + "\n" +
               "LINE ID: " + lineId + "\n" +
               "通訊地址: " + address + "\n\n" +
               "【其他資訊】\n" +
               "服務單位: " + company + "\n" +
               "介紹人: " + referrer + "\n" +
               "申請人: " + applicant;

    GmailApp.sendEmail(targetEmail, subject, body);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "信件發送成功" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}