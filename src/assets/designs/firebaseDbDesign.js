{
  users: {
    userId: {
      "displayName" : "Umut Hazal Koc",
      "email" : "umuthazalkoc@gmail.com",
      "userType": "personal"  // Kurumsal, Robot, Personal
      // Firebase Functions ile doldurulacak alan. Otomatik olarak verdiği cevapları toplayacağım.
      'answerCounts' : 7,
      // Firebase Functions ile doldurulacak alan. Otomatik olarak sorduğu soruları toplayacağım.
      'questionCounts' : 7,
      // Firebase Functions ile doldurulacak alan. Toplam arkadaş sayısı.
      'totalFriendsCounts': 123
      'facebookFriendsCounts':
      'googleFriendsCounts':
      providers : {
        "googleUid" : "104024371948221004028",
        "facebookUid": "........"
      },
      friends : {
        userId: {
          source:  // Facebook, Google,Looq...
        }
      },
      // USER tarafından sorulan sorular
      questions: {
        questionId:
      },
      // Diğer kullanıcılar tarafından sorulmuş ve bu kullanıcının cevap vermesi için bekleyen sorular.
      // Kullanıcı cevap verdiğinde artık Messages alanından takip edilebilecek
      waitingAnswers : {
         questionId : {
           'createdAt' : 1489754607671,
           'finalDateTime':  // Yaratılma zamanından 90 saniye sonra örneğin
           'viewedBy' : 'FALSE'
           'answered' : 'FALSE'
        }
      },
      chatRooms: {
        questionId: {
          chatRoomId: 'TRUE'
        }
      }
    }
  },
  questions: {
    questionId : {
      'askerUserId' : "LTp55GdFgPWiAe8qCXNBZLfrVKC3",
      'content' : "merhaba yeni soru",
      'createdAt' : 1490105946526,
      'status' : "new",   // NEW, WAITING, CLOSED...
      'type' : "Event",
      location: {
        'latitude' : 41.0082376,
        'longitude' : 28.97835889999999
      }
      // Bu soru hangi kullanıcılara gönderildi. Cevaplar ne durumda.
      waitingAnswers: {
        userId: {
          'createdAt' : 1489754607671,
          'finalDateTime':  // Yaratılma zamanından 90 saniye sonra örneğin
          'viewedBy' : 'FALSE'
          'answered' : 'FALSE'
        }
      }
      //Bu soruyla ilgili açılmış chatroom odaları..
      //Soruya cevap verildiğinde bir chatroom açmış oluyoruz.
      chatRooms : {
        chatRoomId: 'TRUE'
      }
    },
  },
  chatRooms: {
    questionId : {
      // ChatRoom soruya cevap veren kullanıcı başına açılacak
      // Daha sonra soruyu soran ile cevap veren arasındaki iletişim bu chatroom üzerinden devam edecek
      chatRoomId : {
        members: {
          userId: "................"
        }
        messages: {
          messageId: {
            'content' : "Atatürk Heykelini gezebilirsin..",
            'createdAt' : 1489755103399,
            'latitude' : 39.941791328303154,
            'longitude' : 32.85478591918945,
            'sender' : "LTp55GdFgPWiAe8qCXNBZLfrVKC3",
            'status' : "TRUE"
          }
        }
      }
    }
  },
}