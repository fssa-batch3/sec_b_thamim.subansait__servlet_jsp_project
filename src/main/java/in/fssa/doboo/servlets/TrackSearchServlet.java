package in.fssa.doboo.servlets;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.TrackEntity;
import in.fssa.doboo.service.TrackService;

@WebServlet("/search")
public class TrackSearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private TrackService trackService = new TrackService(); // Instantiate TrackService

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String searchQuery = request.getParameter("query"); // Get the search query from the request

        try {
        	try {
            Set<TrackEntity> matchedTracks = trackService.findMatchTrackByName(searchQuery);
            request.setAttribute("matchedTracks", matchedTracks);
            }catch (RuntimeException e) {
            	e.printStackTrace();
            }
            Set<TrackEntity> artistTracks = trackService.findTracksByAtirstName(searchQuery);
           
            request.setAttribute("artistTracks", artistTracks);
            request.getRequestDispatcher("search_results.jsp").forward(request, response);
        } catch (RuntimeException e) {
            e.printStackTrace();
            PrintWriter out = response.getWriter();
            out.println(e.getMessage());
            request.getRequestDispatcher("search_results.jsp").forward(request, response);
            
        }
    }
}

