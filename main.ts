namespace MySuperPackage {

    /**
     * 这是一个简单的积木，用来闪烁 LED
     * @param delay 闪烁的时间间隔, eg: 100
     */
    //% block="闪烁灯光 | 间隔 %delay 毫秒"
    //% delay.min=10 delay.max=1000
    export function blinkLED(delay: number): void {
        basic.showIcon(IconNames.Heart)
        basic.pause(delay)
        basic.clearScreen()
        basic.pause(delay)
    }

    /**
     * 计算两个数的和
     */
    //% block="计算 %a + %b"
    export function addNumber(a: number, b: number): number {
        return a + b;
    }
}
