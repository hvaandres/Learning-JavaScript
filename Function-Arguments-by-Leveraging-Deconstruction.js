

// Example 1
const user = {
  name: 'Andres',
  email: 'aharo@instructure.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);


//Example 2

const creditCard = {
  accountNum: '1234567891011121',
  name: 'Alan A. Haro',
  pin: '0000'
}

const creditInfo = ({accountNum, name, pin}) => {
  return (`Hi ${name}! Your current account is  ${accountNum}. pin#: ${pin}.`)
}

creditInfo(creditCard);