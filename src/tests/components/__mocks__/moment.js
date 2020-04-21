const moment = require.requireActual('moment');  // this imports actual moment. import would only import the mocked moment into itself causing error

export default (timestamp = 0) => {
  return moment(timestamp);
};