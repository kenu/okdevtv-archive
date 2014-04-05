package okjsp;


import java.util.ArrayList;
import java.util.List;


public class UserDAO {
	static List<User> list = new ArrayList<User>();

	public static void save(User user) {
		list.add(user);
	}
	
	public static int size() {
		return list.size();
	}

}
