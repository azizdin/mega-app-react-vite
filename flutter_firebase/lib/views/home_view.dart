import 'package:flutter/material.dart';
import 'package:flutter_firebase/widgets/call_to_action.dart';
import 'package:flutter_firebase/widgets/centered_view.dart';
import 'package:flutter_firebase/widgets/details.dart';
import 'package:flutter_firebase/widgets/navigation_bar.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.white,
      body: CenteredView(
        child: Column(
          children: [
            CustomNavigationBar(),
            Expanded(
                child: Row(
              children: [
                Details(),
                Expanded(
                    child: Center(
                  child: CallToAction(title: "Tell me more"),
                ))
              ],
            ))
          ],
        ),
      ),
    );
  }
}
