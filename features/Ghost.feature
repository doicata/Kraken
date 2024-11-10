Feature: Ghost

@user1 @web
Scenario: Como usuario inicio sesion
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter email "d.oicata@uniandes.edu.co" password "1090Oicata@"
  And I wait for 1 seconds
  Then I clic to Sign in

@user6 @web
Scenario: E0006 - Crear un tag con nombre y descripción
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter email "d.oicata@uniandes.edu.co" password "1090Oicata@"
  And I wait for 1 seconds
  Then I clic to Sign in
  Then Página principal del administrador
  Then Clic en la sección de Tags
  Then Página de listado de tags
  Then Clic en el boton New tag
  When Nombre del tag "New Tag"
  Then Clic en Descripción del tag
  Then Descripción del tag "Contenido de tag"
  Then Clic en el boton guardar
  Then Clic en la sección de Tags
  When Valida Tag publicado en la lista de tags "New Tag"

@user7 @web
Scenario: E0007 - Editar la descripción de un tag previamente creado
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter email "d.oicata@uniandes.edu.co" password "1090Oicata@"
  And I wait for 1 seconds
  Then I clic to Sign in
  Then Página principal del administrador
  Then Clic en la sección de Tags
  Then Página de listado de tags
  Then Clic en el boton New tag
  When Nombre del tag "Tag 7"
  Then Clic en Descripción del tag
  Then Descripción del tag "Contenido de tag 7"
  Then Clic en el boton guardar
  Then Clic en la sección de Tags
  Then Página de listado de tags
  When Clic en el tag "Tag 7"
  And I wait for 1 seconds
  Then Clic en Descripción del tag
  When Descripción del tag "Contenido de tag"
  Then Clic en el boton guardar
  And I wait for 1 seconds
  Then Clic en la sección de Tags
  When Valida Tag publicado en la lista de tags "Tag 7"

@user8 @web
Scenario: E0008 - Editar un tag con titulo y descripción
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter email "d.oicata@uniandes.edu.co" password "1090Oicata@"
  And I wait for 1 seconds
  Then I clic to Sign in
  Then Página principal del administrador
  Then Clic en la sección de Tags
  Then Página de listado de tags
  Then Clic en el boton New tag
  When Nombre del tag "Tag 8"
  Then Clic en Descripción del tag
  Then Descripción del tag "Contenido de tag 8"
  Then Clic en el boton guardar
  Then Clic en la sección de Tags
  Then Página de listado de tags
  Then Clic en el tag "Tag 8"
  And I wait for 1 seconds
  Then Nombre del tag "Nombre Modificado"
  Then Clic en Descripción del tag 
  When Descripción del tag "Contenido modificado"
  Then Clic en el boton guardar
  And I wait for 1 seconds
  Then Clic en la sección de Tags
  When Valida Tag publicado en la lista de tags "Nombre Modificado"

@user9 @web
Scenario: E0009 - Crear un tag duplicado nombre y la descripción.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter email "d.oicata@uniandes.edu.co" password "1090Oicata@"
  And I wait for 1 seconds
  Then I clic to Sign in
  Then Página principal del administrador
  Then Clic en la sección de Tags
  Then Página de listado de tags
  Then Clic en el boton New tag
  When Nombre del tag "New Tag1"
  Then Clic en Descripción del tag
  When Descripción del tag "Contenido de tag1"
  Then Clic en el boton guardar
  Then Clic en la sección de Tags
  When Valida Tag publicado en la lista de tags "New Tag1"
  Then Clic en el boton New tag
  When Nombre del tag "New Tag1"
  Then Clic en Descripción del tag
  When Descripción del tag "Contenido de tag1"
  Then Clic en el boton guardar
  Then Clic en la sección de Tags
  When Valida Tag publicado en la lista de tags "New Tag1"

@user10 @web
Scenario: E00010 - Crear tac con caracteres especiales.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I enter email "d.oicata@uniandes.edu.co" password "1090Oicata@"
  And I wait for 1 seconds
  Then I clic to Sign in
  Then Página principal del administrador
  Then Clic en la sección de Tags
  Then Página de listado de tags
  Then Clic en el boton New tag
  When Nombre del tag con caracteres especiales "$%&$%&$%"
  Then Clic en Descripción del tag
  When Descripción del tag "dsfghjklhjfgchgjkjlñl34567890345678"
  Then Clic en el boton guardar
  Then Clic en la sección de Tags
  When Valida Tag publicado en la lista de tags "$%&$%&$%"