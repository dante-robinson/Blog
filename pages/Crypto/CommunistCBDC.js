import Head from "next/head";
import Image from "next/image";

export default function CommunistCBDC({ title }) {
  return (
    <div className="space-y-[1vh]">
      <Head>
        <title>Communist CBDCs</title>
        <meta
          name="description"
          content="Talking about all the cons CBDCs (Central Bank Digital Currencies) will have on our future if we allow them to exist."
        />
      </Head>

      <p className="flex justify-end">Jan 11, 2023</p>

      <h2 className="flex text-xl sm:text-2xl font-bold justify-center">
        Communist CBDCs
      </h2>

      <p>
        Where do I even start with this one? Welcome to my post about CBDCs also
        known as Central Bank Digital Currencies. I plan on talking about the
        cons of CBDC's and the pros?
      </p>

      <p>
        Let's start with the good... CBDCs will move the cash based system to
        being 100% digital just like using your bank account but for everything.
        This could be a con for some but digital in my opinion is better as it
        can't be lost and you can hold large amounts easily on your person (and
        yes I understand bitcoin is better as you actually own your assets etc
        I'm getting to it...). You may have also heard that a CBDC will be a
        safer version of cryptocurrencies since the government in charge this
        can also be a pro depending how you look at it. I will debunk that
        theory later on as well. Other than that not much good those 2 good
        points aren't even really that good as you will soon find out.
      </p>

      <p>
        Now let's get into the thick of it I'm going to add a Table of contents
        below here to make the points clear and easy to read without needing to
        read every section incase your pressed on time.
      </p>

      <div className="text-cyan">
        <a className="hover:underline" href="#what-is-cbdc">
          What is a CBDC?
        </a>
        <br />
        <a className="hover:underline" href="#privacy">
          Privacy Concerns
        </a>
        <br />
        <a className="hover:underline" href="#control">
          Dystopian Control
        </a>
        <br />
        <a className="hover:underline" href="#volatile">
          Less Volatile?
        </a>
        <br />
        <a className="hover:underline" href="#ownership">
          Ownership
        </a>
        <br />
        <a className="hover:underline" href="#ccp">
          Comparison to China's CCP
        </a>
        <br />
      </div>

      <h3 className="flex text-lg justify-center font-semibold">
        What is a CBDC?<a id="what-is-cbdc"></a>
      </h3>

      <p>
        CBDC or Central Bank Digital Currency is a digital or virtual cash that
        is based on an electronic record similar to thank of a database. It is
        managed by the country issuing it through the Central Bank instead of
        through the private banks. A CBDC is not a blockchain even though you
        may think it is as its a digital currency. A blockchain is a publically
        accessible database in simple terms it to does not mean it is
        decentralized because its a blockchain. A database will always be faster
        than any implementation of a blockchain as you have central control and
        don't need to have any consensus mechanisms like Proof of Work (PoW),
        Proof of Stake (PoS), Delegated Proof of Stake (DPoS), etc. A CBDC uses
        this model similar to how your current bank keeps track of transactions.
      </p>

      <h3 className="flex text-lg justify-center font-semibold">
        Privacy Concerns<a id="privacy"></a>
      </h3>

      <p>
        With a centralized ledger Central Banks will have the power to see all
        of your transactions, this is small privacy issue due to the fact that
        they can already demand records from your bank and even see your
        transactions in things like crypto currency due to it's public ledger.
        The only way to avoid that would be to use Monero (XMR) or some similar
        privacy coin or try Litecoin with the Mimble Wimble function and to use
        address that aren't linked backed to your I.D. through any transactions.
      </p>

      <p>
        The concern is mainly that the Central Bank controls the currency and
        allows you to spend it so for example if they don't like your views on
        something or you aren't following the rules (Will talk more about in the
        CCP Section) they could just ban that address/account and prevent your
        funds from moving. Before you say to yourself that's just some crazy
        conspiracy that would never happen to me good for you your a model
        citizen but it does happen I will get into more throughout this post but
        here's an example.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.foxnews.com/world/gofundme-freezes-canadian-freedom-convoy-page-after-it-raises-10m"
        >
          https://www.foxnews.com/world/gofundme-freezes-canadian-freedom-convoy-page-after-it-raises-10m
        </a>
        <br />
        <br />
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.dailywire.com/news/canada-orders-freeze-of-34-cryptocurrency-accounts-connected-to-freedom-convoy"
        >
          https://www.dailywire.com/news/canada-orders-freeze-of-34-cryptocurrency-accounts-connected-to-freedom-convoy
        </a>
      </p>

      <p>
        Here is just an example it doesn't matter if you agree with the protest
        or not, the point remains that the government will go after the money
        you need to survive if they do not like you or your views. Now you might
        be saying well look they blocked crypto transactions to and yes your
        correct I will lightly touch on this here and may dedicate an entire
        post later on it, however this is because they are using a crypto
        exchange to hold these coins on. So basically a short summary of how an
        exchange works is that they hold all the funds in 1 wallet sometimes a
        few more but mostly 1 wallet called a cold storage wallet in most cases.
        When you sign up and they give you an address to receive crypto with for
        different coins right every network has separate addresses. The problem
        is that you don't have the private key to those addresses think of it
        like having the username to login but not the password. At the end of
        the day the money is not yours and when you move the funds it's not your
        either if you trade say ETH for BTC on an exchange nothing changes on
        the blockchain all that happens is they say ok X person sold BTC minus
        that in the database from their account and Y now has the ETH add it to
        theirs. The money doesn't move at all it remains in the cold storage
        account sometimes when you deposit coins like ETH to the exchange and
        don't move them they will remain in the address listed this doesn't
        matter though as again you don't have the private key to move them
        yourself. This is why exchanges are cheaper to transact on than the
        blockchain itself because nothing is moving the fee they charge you is
        for themselves it's just a database entry, so if the government says
        block withdraws on that account that's simple as they own your account.
        This includes Bitcoin if you own it on an exchange you don't own
        anything the exchange does the only real way to own Crypto is to
        download the wallet directly to your PC like Bitcoin Core or to use a
        hardware wallet like a Ledger or Tezor.
      </p>

      <h3 className="flex text-lg justify-center font-semibold">
        Dystopian Control<a id="control"></a>
      </h3>

      <p>
        Now yes the last point did touch on this point as well a little bit
        however there are more issues to discuss. The government still retains
        the control of the monetary system meaning they can constantly keep
        adding new money into the system so they can retain control anytime
        people get close to making money to make change they can inflate you
        back down to nothing. To think the government would "reset" the economy
        and start over is a very stupid idea they are interested in retaining
        their power not giving people more funds to speak out. A poor society is
        an obedient society. Why? because you have no money to fight back you
        will starve to death if you don't follow the rules (again ties to CCP
        section coming up).
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://watcher.guru/news/controlling-crypto-use-can-make-internet-safer-un-executive"
        >
          https://watcher.guru/news/controlling-crypto-use-can-make-internet-safer-un-executive
        </a>
      </p>

      <p>
        They openly want to control these financial markets because they know
        this already. There is an old quote which may or may not be true but it
        is said in 2 different ways the first being "Let us control the money of
        a nation, and we care not who makes its laws" and the second being "Give
        me control of a nation's money and I care not who makes it's laws" —{" "}
        <b>Mayer Amschel Bauer Rothschild</b>. True or not the point is fairly
        accurate maybe you believe it's a conspiracy that's fine. But those who
        control the money supply at the end of the day control the people. The
        elite of the world already know this and that's why they like things
        like Ethereum and Cardano because they uses PoS and DPoS masked as PoS
        in Cardano's case which basically allows the one with the most tokens to
        control the network. Well I wonder who can afford the most tokens?
        That's right... They dislike things like Bitcoin because it's harder to
        control. You could argue sure they can buy all the miners in the world
        and then block transactions. Now there are many possibilities we can go
        from here the most obvious being we can hard fork and even change the
        mining algorithm but let's just say we don't and say the fed pushes a
        new update to Bitcoin cause they have consensus now and control the vote
        well all the disagreeing nodes and miners would automatically be
        hardforked and in the eyes of the people that would the real BTC even if
        it's not called BTC. So making changes to the network very tough to do
        so much so that since launch in 2009 there has only been 23 major
        revisions as the current node is on Bitcoin Core 23.1. The next thing is
        that hardware capability increases drastically year over year this means
        people and companies are buying faster miners and need less of them to
        catchup to the fed or whoever's hashrate. This means the fed needs to
        collect massive amounts of tax from the people to keep attacking the
        network which just doesn't make sense. They would be at the mercy of the
        people rioting or stop paying tax as a way to take back the network. It
        doesn't make sense for them to do that when they can have a PoS system
        or their own coins/tokens.
      </p>

      <p>
        Ethereum already has tokens that have been blocked on certain addresses
        as a global effort, basically collusion between all the dapps. You can
        find a list of that below.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://dune.com/phabc/usdt---banned-addresses"
        >
          https://dune.com/phabc/usdt---banned-addresses
        </a>
      </p>

      <p>
        822 Addresses banned from even moving said USDT token at the time of
        writing, but not only that dapps like Uniswap have also blocked such
        addresses.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://nftians.org/crypto/2022/09/uniswap-labs-has-blocked-253-crypto-wallet-addresses-for-alleged-crimes/"
        >
          https://nftians.org/crypto/2022/09/uniswap-labs-has-blocked-253-crypto-wallet-addresses-for-alleged-crimes/
        </a>
      </p>

      <p>
        I don't know if any of you were around when ETH Launched back in 2014
        but I remember the slogan being "Code is Law" now besides the other crap
        lies that I can get into in another post of why Ethereum is centralized
        this doesn't look like Code is Law to me...
      </p>

      <h3 className="flex text-lg justify-center font-semibold">
        Less Volatile?<a id="volatile"></a>
      </h3>

      <p>
        This is a stupid thing non-coiners (people not into crypto) say, that
        these coins are to volatile to become currency. Well your incorrect and
        I'm going to explain why.
      </p>

      <p>
        How do we look at the current system? If I say I have 5$ what do you
        think of? 5$ right? So when we think of Bitcoin for example why do we
        think of value in dollars? I mean 1 BTC = 1 BTC right it's only when we
        compare it to something else that we say it's volatile right? So then it
        goes without saying we should also compare the dollar to something like
        stocks that get more expensive every year are we really making money or
        is most of the "gains" just inflation? Lets compare the dollar to other
        assets then and see how it stacks up vs something like Bitcoin then
        shall we.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/0tJrla31t8I?t=1388"
        >
          https://youtu.be/0tJrla31t8I?t=1388
        </a>
      </p>

      <p>
        Please watch just 5 minutes of this video literally it saves me a lot of
        retyping what has already been said here and lots of space not needing
        to fill this post with tons of images. Basically it shows charts
        comparing the dollar (fed balance sheet) to real estate, stock market
        and gold. If you don;t understand the federal balance sheet a basic
        overview when the fed balance sheet grows in size they are pumping money
        into the economy in a way by stimulating it. When they sell off assets
        they are adding risk of downturn as those assets need to get resold to
        someone else. The fed has unlimited money to spend on this and can
        choose how much to spend at anytime... It's a scam system really to keep
        this garbage paper "worth" something.
      </p>

      <p>
        If you look at Bitcoin you can see it's beaten every asset class meaning
        if you held Bitcoin you can buy more with that then you could a few
        years ago... but of course you probably knew that just based on the fiat
        (dollar, euro, etc) price of Bitcoin. In a way the dollar isn't volatile
        you would be correct if you made that assumption it's rather predictable
        it will always be worth less and less over time as is the history with
        every single government issued currency since man kind and you know
        what? They all end the same way dead.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.archive.org/web/20090116080117/http://dollardaze.org/blog/?post_id=00405"
        >
          https://web.archive.org/web/20090116080117/http://dollardaze.org/blog/?post_id=00405
        </a>
      </p>

      <p>
        In case your some anti crypto person here's a nice read for you every
        currency has failed even bitcoin will fail at some point hopefully in
        future generations when they no longer understand the meaning of free
        money rather than now. Bitcoin is volatile because it's treated as an
        asset people sell and trade it if it fully replaced the dollar it would
        be much stronger due to the lack of inflation. I won't get into this
        here but if you don't think a deflationary economy is a good thing or
        would work I would suggest reading the book{" "}
        <b>The Price of Tomorrow by Jeff Booth</b>. So a CBDC being not volatile
        is really up to you to decide In my opinion it's just a never ending
        downward trend even if it goes up in the short term doesn't matter the
        purchasing power long term will always be less.
      </p>

      <p>
        While irrelevant I just want to talk about failed crypto currencies
        cause I know someone out there is going to think they are smart and
        think that all the cryptos failed proves it's a scam or something. Here
        is a link for others to see an estimate of failed currencies be that rug
        pulls (where founders run with the money) or just no more activity (like
        people won't buy the coins you want to sell).
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coingecko.com/research/publications/how-many-cryptocurrencies-failed"
        >
          https://www.coingecko.com/research/publications/how-many-cryptocurrencies-failed
        </a>
      </p>

      <p>
        Most cryptos are scams I am talking about bitcoin which isn't a scam if
        you actually look into it I may do a post on this in the future. Any
        project that has a road map has a centralized group of developers than
        control what code is pushed to nodes. For example look up ETH Merge to
        PoS. There was no vote you upgrade your node or it won't work anymore if
        you want to fork to say ETH Proof of Work you have to change versions.
        On Bitcoin anyone can post code to Bitcoin Core and even make there own
        version of the node like Bitcoin XT and those failed forks become their
        own coins people vote in Bitcoin by upgrading to that new version on
        their node. Nobody upgrades reset that change and push another one. This
        is how changes like Segwit and Taproot were made. This is again another
        large topic where companies wanted larger blocks where Segwit removes
        witness information in transactions allowing more to fit within the same
        block size. Either change could have been pushed at the time but Segwit
        won majority and the "big blockers" moved to the Bitcoin Cash fork.
      </p>

      <p>
        Anyways the point I was trying to make is that most of these ICOs and
        coins and tokens especially running on something like Ethereum or
        another smart contract platform are just fast scams it's up to people to
        do their own research before buying things, sadly they make the whole
        space look bad while they try to make a quick buck like most people
        buying crypto. The people buying these coins are sadly those most
        vulnerable, look at people who play the lottery they are mostly in lower
        income brackets willing to risk money to strike it rich these coins are
        no different. It sucks but more teaching needs to be done in this space
        to prevent people from even buying these things. We live in such a
        social media hyped up world everything in the newest trend etc. So
        people see all these others buying so why not them. There's a good meme
        video on this exact thing I will link below but I just want to say
        Bitcoin is not the same as these Cryptos.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=HJzwEi9iJsc"
        >
          https://www.youtube.com/watch?v=HJzwEi9iJsc
        </a>
      </p>

      <h3 className="flex text-lg justify-center font-semibold">
        Ownership<a id="ownership"></a>
      </h3>

      <p>
        With a CBDC it's the same as having money in the bank it's not yours.
        Here's a good clip from the show Years and Years.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.reddit.com/r/Bitcoin/comments/xukmm2/coming_to_a_european_bank_near_yougot_bitcoin/"
        >
          https://www.reddit.com/r/Bitcoin/comments/xukmm2/coming_to_a_european_bank_near_yougot_bitcoin/
        </a>
      </p>

      <p>
        The money isn't covered that insurance all the banks tell you up to
        whatever 100k is only there in certain cases not if they scam you and
        shut down. CBDCs are no different the government can take it from you if
        they want, freeze your funds as they own the network.
      </p>

      <h3 className="flex text-lg justify-center font-semibold">
        Comparison to China's CCP<a id="ccp"></a>
      </h3>

      <p>
        What a topic this is... No offense to Chinese people I just dislike your
        government to first understand what I am talking about you need to see
        for yourself the "social credit" system and how it works in China. I
        would advise watching the short video provided below.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=0cGB8dCDf3c"
        >
          https://www.youtube.com/watch?v=0cGB8dCDf3c
        </a>
      </p>

      <p>
        If you do things they don't like your score drops and when it drops you
        lose access to bank accounts, jobs, travel etc. They don't even let you
        leave so what happens to those 1M+ on the blacklist (probably more now
        that video is from 2020). But you may think it will never happen here
        right?
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/LeslynLewis/status/1577744416290357253?s=20&t=D4JXfw3lgzHTqUE8LCLBiQ"
        >
          https://twitter.com/LeslynLewis/status/1577744416290357253?s=20&t=D4JXfw3lgzHTqUE8LCLBiQ
        </a>
      </p>

      <p>
        What is this Digital I.D. program we don't know yet but it's in the
        works USA also has the Real I.D. program which is going to be required
        to fly domestically within the states in 2025. The difference being you
        can't use your Driver's License for example because it's a State level
        I.D. and you will need a Federal Real I.D. to board planes because they
        are Federal regulated. But Canada wants a digital one what will this
        mean we don't know yet but it's clear that all governments are pushing
        for more and more control even if these are minor things to you.
      </p>

      <p>
        Honestly look at China look at that video and think about it if you
        don't follow all the rules and be a model citizen they have the power to
        own you literally. I can't find the exact video right now but there is a
        video on youtube of a guy J-walking and about 15-30 seconds later he
        gets a notification not to just let him know about the fine but to also
        let him know they already took the money automatically out of his bank
        account. This is what a CBDC can do.
      </p>

      <p>
        Not just that look at how they block you from doing things like getting
        a job or paying rent they can lock your whole account and yes they can
        do that in the current privatized system with more paperwork, but in a
        Central Bank system no need they have control themselves to do it. What
        happens to these people on the blacklist? they can't even work or rent a
        place the government is forcing them to be homeless and basically steal
        and keep their score lower to survive then what they go to jail as a
        criminal or die of starvation, the government is indirectly killing
        people off they don't like. This is very scary China has a government
        run bank system and this is just 1 factor that allows them to do this.
        But hey you know if your that model citizen nothing to fear for you
        right? Just like computer privacy you got nothing to hide right? Such a
        stupid statement back in the 80s we were concerned about this stuff but
        now its common why is that? Because we grow up around it and get used to
        it think for example the next generation growing up around social media
        will they even listen to any news or get all information from their
        feed? They will become literally walking zombies who talk about the
        latest trends and agree with whatever is shown on their feed, why?
        Because firstly peer pressure on social media, and secondly it's the new
        thing being hyped up. No offense to Ukraine either but I'm going to use
        it as an example here most people don't even know where this country is
        or who is around it let alone even a portion of the history. But they do
        know the media told them Russia is bad and that we should be
        anti-russian. Don't believe me?
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pcmag.com/news/github-reportedly-suspends-accounts-related-to-sanctioned-russian-orgs"
        >
          https://www.pcmag.com/news/github-reportedly-suspends-accounts-related-to-sanctioned-russian-orgs
        </a>
        <br />
        <br />
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.polygon.com/23003359/valve-steam-ukraine-russia-developers-bank-regulations-payment"
        >
          https://www.polygon.com/23003359/valve-steam-ukraine-russia-developers-bank-regulations-payment
        </a>
      </p>

      <p>
        We are literally cutting people off of their lively income because of
        something happening indirectly that they have no control over is
        happening. I'm not siding with Russia or Ukraine I think both sides are
        at fault (NATO mainly), but this shouldn't be promoted people wanted
        these sanctions not to long ago it was hyped on social media McDonald's
        and Starbucks closing locations removing people from these jobs. It's
        inhumane we are taking away people's lively hood for something they
        can't change, and it's supported because of hype of social media don't
        want to be left out.
      </p>

      <p>
        Anyways that is off topic the point is that with a CBDC things can get
        out of control very quickly and start looking like China's CCP. Even if
        you are a good person and don't break the rules it shouldn't matter
        because others will be greatly affected and potentially killed off in
        such a situation we need to avoid that by opting out and choosing
        something like Bitcoin. There is no standing still sticking with the
        current system, change is coming we either move backward on the freedom
        scale or move forward the choice is up to us. For those that think just
        them opting out isn't enough my final link for you will be and article
        about Nigeria opting out of their CBDC for Bitcoin.
      </p>

      <p>
        <a
          className="text-red break-all hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kitco.com/news/2022-11-03/Nigerians-reject-the-country-s-CBDC-in-favor-of-decentralized-cryptos.html"
        >
          https://www.kitco.com/news/2022-11-03/Nigerians-reject-the-country-s-CBDC-in-favor-of-decentralized-cryptos.html
        </a>
      </p>
    </div>
  );
}
