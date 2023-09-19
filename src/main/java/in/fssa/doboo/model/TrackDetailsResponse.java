package in.fssa.doboo.model;

public class TrackDetailsResponse {
    public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public TrackEntity getTrack() {
		return track;
	}
	public void setTrack(TrackEntity track) {
		this.track = track;
	}
	public String getArtistName() {
		return artistName;
	}
	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	private int status; 
	private TrackEntity track;
    private String artistName;
    private String message;
    
    @Override
	public String toString() {
		return "TrackDetailsResponse [status=" + status + ", track=" + track + ", artistName=" + artistName
				+ ", message=" + message + "]";
	}
}
