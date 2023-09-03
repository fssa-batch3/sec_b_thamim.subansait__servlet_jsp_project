package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.service.TrackService;

/**
 * Servlet implementation class DeleteTrackServlet
 */
@WebServlet("/track/delete")
public class DeleteTrackServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TrackService trackService = new TrackService();
		try {
			trackService.deleteTrack(Integer.parseInt(request.getParameter("trackid")));
			response.sendRedirect("/dobooweb/user/dashboard");
			
		} catch (ValidationException | RuntimeException e) {
			e.printStackTrace();
			PrintWriter out = response.getWriter();
			out.println(e.getMessage());
			
			
		}
	}

}
