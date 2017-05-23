package com.okdevtv.pattern.after;

public class CarSpeaker implements Speaker {
	@Override
	public void yell(int level) {
		System.out.println("버럭! " + level + "번");
	}
}