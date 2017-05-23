package okjsp;

public class User {
	private String id;
	private String password;
	private String confirmPassword;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public boolean isOk() {
		boolean isOk = (id != null) && id.equals("admin") && (password != null)
				&& password.equals("okpass");
		return isOk;
	}
}
