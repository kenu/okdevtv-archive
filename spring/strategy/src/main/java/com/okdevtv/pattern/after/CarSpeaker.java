package com.okdevtv.pattern.after;

public class CarSpeaker implements Speaker {
	public void yell(int level) {
		System.out.println("버럭! " + level + "번");
	}
}