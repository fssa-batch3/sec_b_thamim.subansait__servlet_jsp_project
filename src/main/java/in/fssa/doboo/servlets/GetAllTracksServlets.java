package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.TrackEntity;
import in.fssa.doboo.service.TrackService;

/**
 * Servlet implementation class GetAllTracksServlets
 */
@WebServlet("/tracks")
public class GetAllTracksServlets extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 response.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your allowed origin(s)
	     response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	     response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		
		TrackService track = new TrackService();
		Set<TrackEntity> tracks;
		try {
			
			tracks = track.getAllTracks();
			ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData(tracks);
			res.setMessage("Tracks details fetched successfully");
//		
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
			
//			request.setAttribute("tracks", tracks);
//			RequestDispatcher rd = request.getRequestDispatcher("get_all_track.jsp");
//			rd.forward(request, response);
			
		} catch (PersistanceException e) {
			e.printStackTrace();
			PrintWriter out = response.getWriter();
			out.println(e.getMessage());
		}	
	}
}
