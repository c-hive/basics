import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  String _username = '';
  String _password = '';
  String _usernameError;
  String _passwordError;

  final usernameController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            TextField(
              decoration: InputDecoration(
                  labelText: "User",
                  errorText: _usernameError,
                  hintText: "Special message to Denis <3"),
              onChanged: (val) => _username = val,
              controller: usernameController,
            ),
            TextField(
              decoration: InputDecoration(
                  labelText: "Password", errorText: _passwordError),
              obscureText: true,
              onChanged: (val) => _password = val,
              controller: passwordController,
            ),
            SizedBox(
              height: 20,
            ),
            RaisedButton(
              child: Text("Log in"),
              onPressed: _doLogin,
            ),
          ]),
    ));
  }

  void _doLogin() async {
    print('login with $_username : $_password');
    _usernameError = null;
    _passwordError = null;

    if (usernameController.text.isEmpty) {
      setState(() {
        _usernameError = 'cannot be empty';
      });
    }

    if (passwordController.text.isEmpty) {
      setState(() {
        _passwordError = 'cannot be empty';
      });
    }

    if (_passwordError == null && _usernameError == null) {
      await Navigator.of(context)
          .pushNamed('/home', arguments: usernameController.text);
      _username = '';
      _password = '';
      usernameController.text = '';
      passwordController.text = '';
    }

    // Calling setState always re-renders, even if nothing changed!
    setState(() {});
  }
}
