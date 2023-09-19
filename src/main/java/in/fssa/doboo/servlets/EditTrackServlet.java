package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.TrackEntity;
import in.fssa.doboo.service.TrackService;

/**
 * Servlet implementation class EditTrackServlet
 */
@WebServlet("/user/track")
public class EditTrackServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TrackService trackService = new TrackService();
		
		TrackEntity tracks = null;
		try {
			tracks = trackService.findByTrackId(Integer.parseInt(request.getParameter("trackid")));
		} catch (ValidationException | PersistanceException | RuntimeException e) {
			e.printStackTrace();
			PrintWriter out = response.getWriter();
	        out.println(e.getMessage());
		}
		request.setAttribute("tracks", tracks);
		RequestDispatcher rd = request.getRequestDispatcher("/update_track.jsp");
  		rd.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		TrackEntity track = new TrackEntity();
		try {
			if(request.getParameter("trackName") == null || request.getParameter("trackName").isEmpty()) {
				PrintWriter consoleOutput = response.getWriter();
				consoleOutput.println("trackName cannot be null or empty");
			} else {
				track.setTrackName(request.getParameter("trackName"));
			}
			
			if(request.getParameter("trackPrice") == null || request.getParameter("trackPrice").isEmpty() || Integer.parseInt(request.getParameter("trackPrice"))<=0) {
				PrintWriter consoleOutput = response.getWriter();
				consoleOutput.println("trackPrice can't less than a zero");
			} else {
				track.setPrice(Integer.parseInt(request.getParameter("trackPrice")));
			}
			
			track.setTrackDetail(request.getParameter("trackDetail"));
			track.setScale(request.getParameter("trackScale"));
			track.setBpm(Integer.parseInt(request.getParameter("trackBpm")));
			track.setDaw(request.getParameter("trackDaw"));
			track.setGenre(request.getParameter("trackGenre"));
			track.setImageUrl(request.getParameter("trackImage"));
			track.setAudioUrl(request.getParameter("trackAudio"));
			int trackId = Integer.parseInt(request.getParameter("trackid")); 
	        TrackService trackService = new TrackService();
			trackService.updateTrack(trackId, track);
			ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData(null);
			res.setMessage("Track details successfully update");

			// Convert the custom class to JSON using Gson
			 Gson gson = new Gson();
			 String responseJson = gson.toJson(res);

			    // Set the response content type and write the JSON to the response
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
			
			
		} catch (ValidationException | RuntimeException | PersistanceException e) {
			e.printStackTrace();
			String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
		}
		

	}

}
