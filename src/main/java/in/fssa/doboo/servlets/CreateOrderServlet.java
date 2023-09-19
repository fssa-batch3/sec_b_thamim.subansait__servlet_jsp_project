package in.fssa.doboo.servlets;

import java.io.BufferedReader;
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
import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.OrderRequest;
import in.fssa.doboo.model.Orders;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.TrackDetailsResponse;
import in.fssa.doboo.service.OrderService;

/**
 * Servlet implementation class CreateOrderServlet
 */
@WebServlet("/order/create")
public class CreateOrderServlet extends HttpServlet {
	private static final long serialVersionUID = 7991824301099557371L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            // Parse request parameters to create an Orders object
            
        	 BufferedReader reader = request.getReader();
             Gson gson = new Gson();
             OrderRequest orderRequest = gson.fromJson(reader, OrderRequest.class);
             List<Integer> trackIds = orderRequest.getTrackIds();
             
     	    HttpSession session = request.getSession(false);
     	    Integer userId = (Integer) session.getAttribute("userId");
     	    
     	   for (Integer trackId : trackIds) {
     	    Orders order = new Orders();
            order.setTrackId(trackId);
            order.setUserId(userId);

            OrderService orderService = new OrderService();
            orderService.createOrder(order);
            }
            
            ResponseEntity res = new ResponseEntity();
		    res.setStatus(200);
		    res.setMessage("order successfully created");
		    res.setData(null);
		    String responseJson = gson.toJson(res);
		    
		    response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(responseJson);

        } catch (ValidationException | PersistanceException | ServiceException e) {
        	String errorMessage = e.getMessage();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(errorMessage);
           
        }
    }
}
