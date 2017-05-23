package com.okdevtv.pattern.after;

public class FakeSpeaker implements Speaker {
	String string;

	public String getString() {
		return string;
	}

	public void yell(int level) {
		this.string = String.valueOf(level);
	}
}