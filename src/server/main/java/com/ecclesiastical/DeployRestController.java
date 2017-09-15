package com.ecclesiastical;

import com.ecclesiastical.com.ecclesiastical.example.ExampleData;
import com.ecclesiastical.com.ecclesiastical.example.ExampleService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class DeployRestController {

    @RequestMapping("/hello")
    public String greet() {
        return "Hello from the other side!!!";
    }

    @RequestMapping(value="/getBackendData", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<ExampleData> getBackendData() {
        System.out.println("backend returning data");
        ExampleData data1 = new ExampleData();
        data1.setBackendItem1("Backend Item 1_1");
        data1.setBackendItem2("Backend Item 1_2");
        data1.setBackendItem3("Backend Item 1_3");
        ExampleData data2 = new ExampleData();
        data2.setBackendItem1("Backend Item 2_1");
        data2.setBackendItem2("Backend Item 2_2");
        data2.setBackendItem3("Backend Item 2_3");

        List<ExampleData> data = new ArrayList<>();
        data.add(data1);
        data.add(data2);
        return data;
    }

    @RequestMapping(value="/getRealBackendData", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<ExampleData> getRealBackendData() {
        ExampleService svs = new ExampleService();
        return svs.getAllData();
    }



}
