export default function ThankyouPage() {
  return (
    <>
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: 50,
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: 200, height: 200, padding: 20 }}>
          <img src="/IIT_Madras_Logo.png" className="img-thumbnail" alt="" />
        </div>
        <b>Thankyou for sending your concerns.</b>
        <b> OE Legislator will respond shortly.</b>
      </div>
    </>
  );
}
