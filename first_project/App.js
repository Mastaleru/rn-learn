import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HSPCrypto from "./hsp-crypto-bundle";

export default function App() {

  let rsa = new HSPCrypto.RSA();
  let AES256GCM = HSPCrypto.AES256GCM;

  async function testRsa(){

    const keyPair ={
      publicKey:"-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsxEsdmKUf4Cj75c10T1PcGJpIWEeuM7bKp/+QVgHoiEbpJEoZgVW5r1hyAiIiDHIaJPmUZcJQoJnJC0ercj7BeytYcr1+gExMA4dGXlcr/zgMosgtloHqQ6SCfa5tDbLZ8uDcmE8ZlYIqkkREujOI90RxjZqzTKOoOMuv/H4p881cAyM0ZzIHCwytusWaao1dYDkIg/anGOz9VZ1H0OCNN1O9LZIIC7C0ntzFJ8dq2aXdoXYaQ2Circ4roHDq/91CsFsM1zGweTLLZnL5hbir2eJQ4iomME4AdJ4XYOPm3hPsmOA1rql9KdhaleufJxcVzHCIQiOSzwznu9ldjWS3QIDAQAB-----END PUBLIC KEY-----",
      privateKey:"-----BEGIN PRIVATE KEY-----MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzESx2YpR/gKPvlzXRPU9wYmkhYR64ztsqn/5BWAeiIRukkShmBVbmvWHICIiIMchok+ZRlwlCgmckLR6tyPsF7K1hyvX6ATEwDh0ZeVyv/OAyiyC2WgepDpIJ9rm0Nstny4NyYTxmVgiqSRES6M4j3RHGNmrNMo6g4y6/8finzzVwDIzRnMgcLDK26xZpqjV1gOQiD9qcY7P1VnUfQ4I03U70tkggLsLSe3MUnx2rZpd2hdhpDYKKtziugcOr/3UKwWwzXMbB5MstmcvmFuKvZ4lDiKiYwTgB0nhdg4+beE+yY4DWuqX0p2FqV658nFxXMcIhCI5LPDOe72V2NZLdAgMBAAECggEADe4S1aXPFAkjl6addOjOVnmNYJ+fxnQvGAaIvrgUpe/p6Ngy+pbFPx9x7R/+0QuAYeRJiUTU31PqJqYM6iuFnZ0fEsm5b2iq1Shv6pSmmXk0TrJEifMAgA4GXdiP8z1E/w7Vq671RifAtlCHT7+FE8SllpQSpGJftpPdxehStekWs5VlEOL0Qjl10ybPMvVn5hfX6EIhzey3FpKnJ0SX9VdNzuAhp27T9TxkN1q8QiFnbWlrmTpV7gLys62OHDe6Ah1Gq/RFDETKZNXzzYSPNI0SjbJ38z2vLAHqEjrAuRFSCOSdTSWiZNGYA3CH78c/AtaHJLZuN+B0OiCba1pukQKBgQD5xsnjiiBnkvCaCMk5LoSwPdr2W9/HXsoGQwAFoORKIxGLgji28raLprCEltXDPV8Tbi9dTmRYVHjcbL3+0kGeC+B3OsNuPpRZKCvxCt2ZWD6GTojeWBq/AgLNXAlJ9XjDHDAxrWe6VcwgkmzL4jPMIatC3DrVk8CF2+eGJxapbQKBgQC3h1yQVY6fUZ+Etvz6OnNrwmAYOXNR930uisUekPnjxvcG/Nf/8eerX771SGy93xbKTYOo518Hkod8P75H/nfeaPpM3tevev/ettC7ApKkdaNmt6MtQAdGlojgNkxd74Ii47jnjuid5Ict9igAQEqfJLB9LD7eP5Cppx7XsPGZMQKBgA+9iUd/kt80EVmDqDqkRdRdcYkI7SdBP/X5Du1L4FcTsq1Z/Xz5+qr+TC1u2/W7zlwJG48Du6sdV6h8adS/J0dwdCrPVzWBWBPuRiagiqp5Nyd7l4B7iOP0mnyaijNQ9tVE13yp8tl5Qq3izFxk2uLIVGSYQFTpRL6qxwJbQEBZAoGAdIYjBRjtRsZCK7crA4zc/4wYCwle6Knj9wrwgKm3nyEScoNSeRST7MELsxxavmrIQ4XXlAPi2CH2l7K5E2jDnpi0Yt4Rvz6u+i7EdBf8FyMBrhPmLLK8a9rj6MdQ0UtiKti+63ZWxvjzwwDJAO/Q8R4QWEkhWWauaKjM8lFL8+ECgYB49pvZ9LaSKIfraOb7raaH/5zoxZwevRnU3ZS7rLy/+1fmG/lcnasIEcLzGHxfcH6OR6lghU7BdULjQ6pM0MYgvh0VaIx5M2k1K7tO7YBgEigAqkCjF31pPNmUfD2afXLfYj8yMSiLUVAvyLoYPL3j0UvrzpQtPzouAr0kfI9NXw==-----END PRIVATE KEY-----"
    }
    rsa.setPrivateKey(keyPair.privateKey);
    rsa.setPublicKey(keyPair.publicKey);
    const dataToEncrypt = 'Hello, RSA encryption!';
    const encryptedData = rsa.encrypt(dataToEncrypt);
    const decryptedData = rsa.decrypt(encryptedData);
    return decryptedData;
  }

  async function testAES256GCM(){


    const secretKey = HSPCrypto.randomBytes(32);
    const iv = HSPCrypto.randomBytes(12);
    const aes256gcm = new AES256GCM(secretKey, iv);
    const plaintext = 'This is a test string';

    const encrypted = aes256gcm.encrypt(plaintext);
    const decrypted = aes256gcm.decrypt(encrypted);
    return decrypted;
  }

  console.log("Before encryption part");


   Promise.all([testRsa(), testAES256GCM()]).then((results)=>{
     console.log(results);
   })


  return (
    <View style={styles.container}>
      <Text>Hello world now!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
