package in.fssa.doboo.model;

import java.util.List;


public class OrderRequest {
	
	private List<Integer> trackIds;
	 
	private int userId;
	
	
    public List<Integer> getTrackIds() {
		return trackIds;
	}
	public void setTrackIds(List<Integer> trackIds) {
		this.trackIds = trackIds;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	

	   @Override
		public String toString() {
			return "OrderRequest [trackIds=" + trackIds + ", userId=" + userId + "]";
		}

}