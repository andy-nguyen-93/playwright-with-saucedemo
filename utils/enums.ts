enum Account {
  STANDARD = "standard_user",
  LOCKED_OUT = "locked_out_user",
  REJECTED = "rejected_user",
}

enum Password {
  ALL = "secret_sauce",
}

enum Message {
  LOGIN_WITH_LOCKED_OUT_USER = "Epic sadface: Sorry, this user has been locked out.",
  LOGIN_FAIL = "Epic sadface: Username and password do not match any user in this service",
  LOGIN_WITHOUT_USERNAME = "Epic sadface: Username is required",
  LOGIN_WITHOUT_PASSWORD = "Epic sadface: Password is required",
}

export { Account, Password, Message };
