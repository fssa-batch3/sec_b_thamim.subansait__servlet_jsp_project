package in.fssa.doboo.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.TrackEntity;
import in.fssa.doboo.service.TrackService;

/**
 * Servlet implementation class CreateTrackServlet
 */
@WebServlet("/user/upload")
public class CreateTrackServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		RequestDispatcher rd = request.getRequestDispatcher("/create_track.jsp");
		
		rd.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, NumberFormatException {
		TrackEntity track = new TrackEntity();
		track.setTrackName(request.getParameter("trackName"));
		System.out.println(track.getTrackName());
		track.setTrackDetail(request.getParameter("trackDetail"));
		track.setScale(request.getParameter("trackScale"));
		if(!request.getParameter("trackBpm").isEmpty()) { 
			track.setBpm(Integer.parseInt(request.getParameter("trackBpm")));
		}	
		track.setGenre(request.getParameter("trackGenre"));
		if(!request.getParameter("trackPrice").isEmpty()) {
		track.setPrice(Integer.parseInt(request.getParameter("trackPrice")));
		}
		track.setDaw(request.getParameter("trackDaw"));
		track.setImageUrl(request.getParameter("imageUrl"));
		track.setAudioUrl(request.getParameter("audioUrl"));
		
		
		
    TrackService trackservice = new TrackService();
    HttpSession session = request.getSession();
    Integer userId = (Integer) session.getAttribute("userId");
    
    try {
		trackservice.createTrack(track, userId);
		ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData(null);
			res.setMessage("track uploaded successfully");
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
       
	} catch (ValidationException | RuntimeException e) {
		e.printStackTrace();
		String errorMessage = e.getMessage();
		response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(errorMessage);
		 
	}
	}

}
