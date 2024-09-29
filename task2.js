function sendNotification(email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }


  let [username, domain] = email.split('@');


  return `${username} sent you an email from ${domain}`;
}



console.log(sendNotification("xyz@outlook.com")); 


