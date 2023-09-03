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

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.TrackEntity;
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
		try {
			tracks = track.findByTrackId(Integer.parseInt(request.getParameter("trackid")));
		} catch (NumberFormatException | ValidationException | PersistanceException e) {
			e.printStackTrace();
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println(e.getMessage());
		}
		request.setAttribute("track", tracks);
		RequestDispatcher rd = request.getRequestDispatcher("/track_detail.jsp");
		rd.forward(request, response);
	}

}
