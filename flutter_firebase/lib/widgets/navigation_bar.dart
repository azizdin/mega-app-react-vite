import 'package:faker/faker.dart';
import 'package:flutter/material.dart';

class CustomNavigationBar extends StatelessWidget {
  const CustomNavigationBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          SizedBox(
            height: 80,
            width: 150,
            child: Image.network(faker.image.image()),
          ),
          const Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              _NavBarItem(title: 'Episodes'),
              SizedBox(
                width: 60,
              ),
              _NavBarItem(title: 'About'),
            ],
          )
        ],
      ),
    );
  }
}

class _NavBarItem extends StatelessWidget {
  final String title;
  const _NavBarItem({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: const TextStyle(
        fontSize: 18,
      ),
    );
  }
}
