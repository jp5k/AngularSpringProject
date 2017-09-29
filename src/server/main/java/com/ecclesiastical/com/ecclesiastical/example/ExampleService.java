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

    public List<ExampleData> getAllData(String tableId) {
        List<ExampleData> data = new ArrayList<ExampleData>();
        try {
            Connection conn = ConnectionUtil.getConnection();
            Statement statement = conn.createStatement();
            // Maybe use criteria here instead of raw swl
            StringBuffer sql = new StringBuffer("select * from exampleTable");
            if (tableId != null) {
                sql.append(" where tableId ='"+tableId+"'");
            }
            ResultSet rs = statement.executeQuery(sql.toString());
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
