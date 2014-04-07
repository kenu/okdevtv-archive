package net.okjsp.gawi;


import java.io.Serializable;
import java.util.Date;

public class Game implements Serializable  {

	private static final long serialVersionUID = 4548956648783490790L;
	private int id;
	private int choice;
	private int computerChoice;
	private String judgement;
	private Date datetime;

	public Game(int choice, int computerChoice, String judgement, Date datetime) {
		this.choice = choice;
		this.computerChoice = computerChoice;
		this.judgement = judgement;
		this.datetime = datetime;
	}

	public Game() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getChoice() {
		return choice;
	}

	public void setChoice(int choice) {
		this.choice = choice;
	}

	public int getComputerChoice() {
		return computerChoice;
	}

	public void setComputerChoice(int computerChoice) {
		this.computerChoice = computerChoice;
	}

	public String getJudgement() {
		return judgement;
	}

	public void setJudgement(String judgement) {
		this.judgement = judgement;
	}

	public Date getDatetime() {
		return datetime;
	}

	public void setDatetime(Date datetime) {
		this.datetime = datetime;
	}

	public int getJudge() {
		int judgement;

		if (this.choice == this.computerChoice) {
			judgement = 0;
		} else {
			int diff = this.computerChoice - this.choice;
			if ((diff == 1) || (diff == -2)) {
				judgement = -1;
			} else {
				judgement = 1;
			}
		}
		return judgement;
	}

}
