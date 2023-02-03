package com.yasin;

import com.yasin.controller.AccountController;
import com.yasin.controller.AuthController;
import com.yasin.controller.MessageController;
import com.yasin.controller.TransactionController;
import io.javalin.Javalin;

public class Main {

    public static void main(String[] args) {

        Javalin app = Javalin.create(config -> {
            config.enableCorsForAllOrigins();
        });

        AuthController ac = new AuthController();
        ac.mapEndpoints(app);

        AccountController accountController = new AccountController();
        accountController.mapEndpoints(app);

        TransactionController transactionController = new TransactionController();
        transactionController.mapEndpoints(app);

        MessageController messageController = new MessageController();
        messageController.mapEndpoints(app);

        app.start(8080);

    }
}

// try (ClassPathXmlApplicationContext container = new
// ClassPathXmlApplicationContext("beans.xml")){
//
// AuthController authController = container.getBean(AuthController.class);
// authController.mapEndpoints(app);
//
// AccountController accountController =
// container.getBean(AccountController.class);
// accountController.mapEndpoints(app);
//
// TransactionController transactionController =
// container.getBean(TransactionController.class);
// transactionController.mapEndpoints(app);
//
// Account account = container.getBean(Account.class);
//
// AccountType accountType = container.getBean(AccountType.class);
//
// Transaction transaction = container.getBean(Transaction.class);
//
// Transfer transfer = container.getBean(Transfer.class);
//
// User user = container.getBean(User.class);
//
// }catch(Exception e) {

// }
//
// app.start(8080);
//
// try (AnnotationConfigApplicationContext container = new
// AnnotationConfigApplicationContext("beans.xml")){
//
// }catch(Exception e) {

// }