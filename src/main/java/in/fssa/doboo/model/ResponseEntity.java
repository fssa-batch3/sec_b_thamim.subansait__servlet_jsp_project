package in.fssa.doboo.model;

public class ResponseEntity {
	private int status;
	
	private Object data;
	private String message;
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "ResponseEntity [status=" + status + ", data=" + data + ", message=" + message + "]";
	}
	

}
