package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.TrackDetailsResponse;
import in.fssa.doboo.model.TrackEntity;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.TrackService;

/**
 * Servlet implementation class GetTrackByTrackIdServlet
 */
@WebServlet("/track/detail")
public class GetTrackByTrackIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TrackService track = new TrackService();
		TrackEntity tracks = null;
		String artistName = null;
		try {
			tracks = track.findByTrackId(Integer.parseInt(request.getParameter("trackid")));
			artistName = track.findAtirstNameByTrackId(Integer.parseInt(request.getParameter("trackid")));
					if (tracks != null) {
					    // Create a custom class to hold the combined data
					    TrackDetailsResponse res = new TrackDetailsResponse();
					    res.setStatus(200);
					    res.setTrack(tracks);
					    res.setArtistName(artistName);
					    res.setMessage("Track details successfully fetched");

					    // Convert the custom class to JSON using Gson
					    Gson gson = new Gson();
					    String responseJson = gson.toJson(res);

					    // Set the response content type and write the JSON to the response
					    response.setContentType("application/json");
					    response.setCharacterEncoding("UTF-8");
					    response.getWriter().write(responseJson);
					}
			} catch (NumberFormatException | ValidationException | PersistanceException e) {
			e.printStackTrace();
			String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
			
		}
	
	}
}


