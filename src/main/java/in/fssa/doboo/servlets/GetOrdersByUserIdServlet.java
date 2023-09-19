package in.fssa.doboo.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.model.Orders;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.service.OrderService;

/**
 * Servlet implementation class GetOrdersByUserIdServlet
 */
@WebServlet("/orders")

public class GetOrdersByUserIdServlet extends HttpServlet {
    /**
	 * 
	 */
	private static final long serialVersionUID = -5207959736000880182L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            // Parse the userId parameter from the request
        	
    	    HttpSession session = request.getSession(false);
     	    Integer userId = (Integer) session.getAttribute("userId");

            // Create an OrderService instance and call the getOrdersByUserId method
            OrderService orderService = new OrderService();
            List<Orders> ordersList = orderService.getOrdersByUserId(userId);
            
            ResponseEntity res = new ResponseEntity();
		    res.setStatus(200);
		    res.setMessage("order successfully fetched");
		    res.setData(ordersList);
		    Gson gson = new Gson();
		    String responseJson = gson.toJson(res);
		    response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(responseJson);
            
        } catch (RuntimeException | PersistanceException e) {
           
        	String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
        }
    }
}







