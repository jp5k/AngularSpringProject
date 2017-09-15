package com.ecclesiastical.utils;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ConnectionUtil {
/**/

    private static Connection connection = null;

    public static Connection getConnection() {
        if (connection != null) {
            return connection;
        } else {
            try {
                // TODO: Connection pooling here
                Properties prop = new Properties();
                InputStream inputStream = ConnectionUtil.class.getClassLoader().getResourceAsStream("/jdbc.properties");
                prop.load(inputStream);
                String driver = prop.getProperty("jdbc.driverClassName");
                String url = prop.getProperty("jdbc.url");
                String user = prop.getProperty("jdbc.username");
                String password = prop.getProperty("jdbc.password");
                Class.forName(driver);
                connection = DriverManager.getConnection(url, user, password);
                System.out.println("connection is "+connection.toString());
            // TODO: Make this better - proper handling
            } catch (ClassNotFoundException e) {
                    e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return connection;
        }
    }
}