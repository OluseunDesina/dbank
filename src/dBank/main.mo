import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {
  stable var currenntValue: Float = 300;
  // currenntValue := 300;
  stable var startTime = Time.now();
  // startTime:= Time.now();

  let id = 34567892010;

  Debug.print(debug_show(id));
  Debug.print(debug_show(currenntValue));

  public func topUp(amount: Float) {
    currenntValue += amount;
    Debug.print(debug_show(currenntValue));
  };

  // topUp();

  public func withdrawl(amount: Float) {

    let tempValue: Float = currenntValue - amount;
    if (tempValue >= 0) {
    currenntValue -= amount;
    Debug.print(debug_show(currenntValue));
    } else {
    Debug.print(debug_show("Operation not allowed"));
    }
  };

  public query func checkBalance(): async Float {
    return currenntValue;
  };

  public func printStartTime() {
    Debug.print(debug_show(startTime));
  };

  public func compound() {
    let currentTime = Time.now();
    let timeelapsedNS = currentTime - startTime;
    let timeelapsedS = timeelapsedNS / 1000000000;
    currenntValue := currenntValue * (1.01 ** Float.fromInt(timeelapsedS));
    startTime := currentTime
  };

}
