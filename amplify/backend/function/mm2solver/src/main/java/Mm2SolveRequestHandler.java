/* Amplify Params - DO NOT EDIT
	API_MICROMANAGER2API_GRAPHQLAPIIDOUTPUT
	API_MICROMANAGER2API_MMSCHEDULETABLE_ARN
	API_MICROMANAGER2API_MMSCHEDULETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import com.amazonaws.services.lambda.runtime.Context; 
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class Mm2SolveRequestHandler implements RequestHandler<RequestClass, ResponseClass>{

    public ResponseClass handleRequest(RequestClass request, Context context){
        String greetingString = String.format("Hello %s %s!", request.firstName, request.lastName);
        return new ResponseClass(greetingString);
    }
}