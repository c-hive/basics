import 'package:flutter/material.dart';
import 'package:flutter_demo/ui/screens/home_page.dart';
import 'package:flutter_demo/ui/screens/login_page.dart';

Map<String, WidgetBuilder> setupRoutes() {
  return {
    '/': (_) => Login(),
    '/home': (_) => MyHomePage(title: 'Welcome to your profile'),
  };
}
