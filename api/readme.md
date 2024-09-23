### Messageboard API


## Hämta alla posts<br />
Returnerar alla posts sorterat efter datum
<br /> <br />
**Method** GET <br />
**URL:** https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/messages

## Hämta alla posts för specifik användare
Returnerar alla posts för en användare. Skicka användarnamnet som en pathParam
<br /> <br />
**Method** GET <br />
**URL:** https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/messages/{username}

## Skapa ny Post<br />
Kräver ett användarnamn och ett meddelande.
<br /> <br />
**Method** POST <br />
**URL:** https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/addMessage
<br /> <br />
*BODY*
```
{
	"user" : "Simon",
	"message": "My new message here"
}
```

## Redigera Post<br />
Kräver användarnamn och id för posten som ska ändras i pathParams<br />
Skicka message i body
<br /> <br />
**Method** PUT <br />
**URL:** https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/editPost/{username}/{postId}
<br /> <br />
*BODY*
```
{
  "message": "My updated message"
}
```
