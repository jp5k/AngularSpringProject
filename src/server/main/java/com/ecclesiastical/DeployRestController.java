package com.ecclesiastical;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.ArrayList;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class DeployRestController {

    @RequestMapping("/hello")
    public String greet() {
        return "Hello from the other side!!!";
    }

    @RequestMapping(value="/getBackendData", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<ExampleData> getBackendData() {
        ExampleData data1 = new ExampleData();
        data1.setBackendItem1("Backend Item 1_1");
        data1.setBackendItem2("Backend Item 1_2");
        data1.setBackendItem3("Backend Item 1_3");
        ExampleData data2 = new ExampleData();
        data2.setBackendItem1("Backend Item 2_1");
        data2.setBackendItem2("Backend Item 2_2");
        data2.setBackendItem3("Backend Item 2_3");

        List<ExampleData> data = new ArrayList<ExampleData>();
        data.add(data1);
        data.add(data2);
        return data;
    }



}
