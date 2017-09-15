package com.ecclesiastical.com.ecclesiastical.example;

import com.ecclesiastical.utils.ConnectionUtil;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by stewartdunlop on 14/09/2017.
 */
public class ExampleService {

    public List<ExampleData> getAllData() {
        List<ExampleData> data = new ArrayList<ExampleData>();
        try {
            Connection conn = ConnectionUtil.getConnection();
            Statement statement = conn.createStatement();
            ResultSet rs = statement.executeQuery("select * from exampleTable limit 15");
            while (rs.next()) {
                ExampleData dataItem = new ExampleData();
                dataItem.setIdtable1(rs.getInt("itemid"));
                dataItem.setBackendItem1(rs.getString("item1Value"));
                dataItem.setBackendItem2(rs.getString("item2Value"));
                dataItem.setBackendItem3(rs.getString("item3Value"));
                data.add(dataItem);
            }
            rs.close();
            statement.close();
            conn = null;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return data;
    }
}
