<script>
    import { Card } from 'flowbite-svelte';
    import QrCode from '$components/QrCode'
</script>


<div class="flex items-center mt-12">

<h1 class="text-4xl font-bold mx-auto">gallery</h1>
</div>
<!-- Make a grid with three colums of cards with varying props passed to <QrCode/> -->
<div class="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 my-12 items-center">


<Card>
<div class="flex items-center justify-center">
    <QrCode
    unified="bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?lightning=LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6&amount=0.00001&label=payjoin.org&message=Donation to payjoin.org"
    width={300}
    height={300}
    bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
    lightning="LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6"
    parameters="amount=0.00001&label=payjoin.org&message=Donation to payjoin.org"
    type="svg"
  />
</div>

</Card>

<Card>
  <div class="flex items-center justify-center">
      <QrCode
      unified="bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?lightning=LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6&amount=0.00001&label=payjoin.org&message=Donation to payjoin.org"
      width={300}
      height={300}
      bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
      lightning="LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6"
      parameters="amount=0.00001&label=payjoin.org&message=Donation to payjoin.org"
      image="./assets/bitcoin.svg"
      type="svg"

    />
  </div>
  
  </Card>
  <Card>
    <div class="flex items-center justify-center">
        <QrCode
        unified="bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?lightning=LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6&amount=0.00001&label=payjoin.org&message=Donation to payjoin.org"
        width={300}
        height={300}
        bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
        lightning="LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6"
        parameters="amount=0.00001&label=payjoin.org&message=Donation to payjoin.org"
        image="./assets/voltage.png"
        type="svg"
        cornersSquareColor="#000"
        cornersDotColor="#000"
        cornersSquareType="extra-rounded"
        dotsType="classy-rounded"
        dotsColor="#000"
      />
    </div>
    
    </Card>
    <Card>
      <div class="flex items-center justify-center">
          <QrCode
          width={300}
          height={300}
          bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
          image="./assets/bitcoin.svg"
          type="svg"
          imageEmbedded={true}
          cornersSquareColor="#ffa500"
          cornersDotColor="#ffa500"
          cornersSquareType="extra-rounded"
          dotsType="classy-rounded"
          dotsColor="#c98a16"
        />
      </div>
      
      </Card>

      <Card>
        <div class="flex items-center justify-center">
            <QrCode
            width={300}
            height={300}
            bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
            image="./assets/payjoin.svg"
            type="svg"
            imageEmbedded={true}
            cornersSquareColor="#db6d99"
            cornersDotColor="#db6d99"
            cornersSquareType="extra-rounded"
            dotsType="rounded"
            dotsColor="#db6d99"
          />
        </div>
        
        </Card>
        <Card>
          <div class="flex items-center justify-center">
              <QrCode
              width={300}
              height={300}
              bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
              image="./assets/bitcoin.svg"
              type="svg"
              cornersSquareColor="green"
              cornersDotColor="red"
              cornersSquareType="extra-rounded"
              imageEmbedded={true}
              dotsType="dots"
              dotsColor="blue"
            />
          </div>
          
          </Card>



</div>