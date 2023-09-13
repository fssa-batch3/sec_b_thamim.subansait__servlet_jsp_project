package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ErrorServlet
 */
@WebServlet("/error")
public class ErrorServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    try {
	    	 RequestDispatcher dispatcher = request.getRequestDispatcher("/error_page.jsp");
		        dispatcher.forward(request, response);
	        
	    } catch (Exception e) {
	        e.printStackTrace();
	        PrintWriter out = response.getWriter();
	        out.println(e.getMessage());
	    }
	}


}
