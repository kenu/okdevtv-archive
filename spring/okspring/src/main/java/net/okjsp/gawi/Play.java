package net.okjsp.gawi;


import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Play {

	public String[] items = { "가위", "바위", "보" };
	private List<Game> list;
	DataAccessObject dao = new DataAccessObject();
	Stat stat = new Stat();

	/**
	 * @param args
	 */
	static public void main(String[] args) {
		Play play = new Play();
		play.loadStat();
		while (play.game()) {
			System.out.println("====\n\n\n====");
		}
	}

	public void loadStat() {
		stat.calcStats(dao.loadStat());
		System.out.println(stat.getTotal() + " records loaded.");
	}

	public boolean game() {
		for (int i = 0; i < items.length; i++) {
			System.out.print(i + ":" + items[i] + " ");
		}

		System.out.print("\n----\n선택하세요:");

		Scanner scanner = new Scanner(System.in);
		String next = scanner.next();
		int choice = Integer.parseInt(next);

		if (choice < 0 || choice > 2) {
			System.out.println("0~2 숫자만 입력해주세요.\n게임을 종료합니다.");
			return false;
		}

		int computerChoice = getComputerChoice();

		System.out.println("----\n" + "당신: " + items[choice] + "\n컴퓨터: "
				+ items[computerChoice]);

		String judgement = judge(choice, computerChoice);

		System.out.println("----\n" + judgement);

		save(choice, computerChoice, judgement);

		showStat();

		return true;
	}

	public int getComputerChoice() {
		return new Random(System.nanoTime()).nextInt(3);
	}

	private void showStat() {
		loadStat();
		System.out.println("\n----\ntotal: " + stat.getTotal());
		if (stat.getTotal() == 0) {
			System.out.println("전적이 없습니다.");
			return;
		}
		System.out.println(stat.getWin() + "승 " + stat.getEven() + "무 " + stat.getLose() + "패");
		System.out.println("승률: " + stat.getRate() + "%");
	}
	
	public Stat getStat() {
		return stat;
	}

	public void save(int choice, int computerChoice, String judgement) {
		Date datetime = new Date();
		Game game = new Game(choice, computerChoice, judgement, datetime);
		if (list != null) {
			list.add(game);
		}
		dao.save(game);
		loadStat();
	}

	public String judge(int choice, int computerChoice) {
		String judgement;

		if (choice == computerChoice) {
			judgement = "비겼습니다.";
		} else {
			int diff = computerChoice - choice;
			if ((diff == 1) || (diff == -2)) {
				judgement = "컴퓨터가 이겼습니다.";
			} else {
				judgement = "당신이 이겼습니다.";
			}
		}
		return judgement;
	}
	
}