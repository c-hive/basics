import 'package:flutter/material.dart';
import 'package:flutter_demo/app/app.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Login smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(App());

    expect(find.text('Log in'), findsOneWidget);

    await tester.tap(find.byType(RaisedButton));
    await tester.pump();

    expect(find.text('cannot be empty'), findsNWidgets(2));

    await tester.enterText(find.byType(TextField).at(0), "user");

    await tester.tap(find.byType(RaisedButton));
    await tester.pump();

    expect(find.text('cannot be empty'), findsOneWidget);

    await tester.enterText(find.byType(TextField).at(1), "password");

    await tester.tap(find.byType(RaisedButton));
    await tester.pumpAndSettle();

    expect(find.text('cannot be empty'), findsNothing);

    // expect(find.text('Hello'), findsOneWidget);
    // expect(find.text('Log out'), findsOneWidget);
  });
}
