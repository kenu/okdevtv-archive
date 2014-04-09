package com.okdevtv.pattern.after;

public class Car {
	private Speaker speaker;

	public Car(Speaker speaker) {
		this.speaker = speaker;
	}

	public void 급정거(int level) {
		speaker.yell(level);
		// ...
	}

}