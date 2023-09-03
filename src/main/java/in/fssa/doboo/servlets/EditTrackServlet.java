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

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ValidationException;
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
			
			TrackService trackService = new TrackService();
			Cookie[] ck = request.getCookies();
	         String userId = null;

	         if (ck != null) {
	             for (Cookie cookie : ck) {
	                 if ("userid".equals(cookie.getName())) {
	                     userId = cookie.getValue();
	                     break;
	                 }
	             }
	         }

	         if (userId == null) {
	             // Handle the case where the userId cookie is not found.
	             response.sendRedirect("login"); // Redirect to login page or appropriate error page.
	             return;
	         }
	         
	         int trackId = Integer.parseInt(request.getParameter("trackid")); 
			trackService.updateTrack(trackId, track);
			response.sendRedirect("/dobooweb/user/dashboard");
			
		} catch (ValidationException | RuntimeException e) {
			e.printStackTrace();
			PrintWriter consoleOutput = response.getWriter();
			consoleOutput.println(e.getMessage());
		}
		

	}

}
