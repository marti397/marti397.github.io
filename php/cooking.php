<div id="tabs-1">
            <form action="MAILTO:chris.m.servin@gmail.com" method="post" enctype="text/plain" id="cookingForm">
                <div id="description">
                    <div>Location<br><input type="text" name="location" id="kitchenLocation"></div>
                    <br><div>Size of the cooking area<br><input type="text" name="cookingArea" id="cookingArea"></div>
                    <br><div>Size of the kitchen<br><input type="text" name="kitchenArea" id="kitchenArea"></div>
                </div>
                <br><div id="cookingEquipment">
                    <div><input id="grills" type="checkbox" name="cookingEqpmt" value="grills">Grills</div>
                    <div><input id="ovens" type="checkbox" name="cookingEqpmt" value="ovens">Ovens</div>
                    <div><input id="deepFryers" type="checkbox" name="cookingEqpmt" value="deep fryers">Deep Fryers</div>
                    <div><input id="stoves" type="checkbox" name="cookingEqpmt" value="stoves">Stoves</div>
                    <div><input id="hoods" type="checkbox" name="cookingEqpmt" value="hoods">Hoods</div>
                    <br><br><div><input id="naturalGasCooking" type="checkbox" name="cookingEqpmt" value="gas fired.">Gas fired equipment</div>
                    <div><input id="electricCooking" type="checkbox" name="cookingEqpmt" value="electric">Electric equipment</div>
                </div>
                <br><br><div id="cookingProtection">
                    <input id="wetChemicalKitchen" type="checkbox" name="cooking" value="wetChemical">Wet Chemical System per ANSI/UL300 NFPA 96, 10.2.3<br>
                    <a href="http://www.vrfa.org/pdf/UL%20300%20Commercial%20Cooking%20Systems.pdf" target="_blank">UL 300 requirements</a>
                    <ul>
                        <li>Nozzles located in the hood and duct</li>
                        <li><input id="coverOilHazard" type="checkbox" name="cookingEqpmt" value="coverOilHazard">Nozzles located over each cooking appliance</li>
                        <li>Manual pull station</li>
                        <li><input id="cookingFuelShutoff" type="checkbox" name="cookingEqpmt" value="cookingFuelShutoff">Automatic fuel shut-offs for gas and electric</li>
                        <li>UL 300-compliant wet chemical extinguishing system</li>
                        <li>Wet chemical extinguishing system serviced semi-annually by an authorized licensed service company</li>
                        <li>Hood and duct maintenance and cleaning semi-annually by an authorized licensed service company</li>
                        <li>Baffle filter cleaning recommended weekly</li>
                    </ul>
                    <input id="hoodVent" type="checkbox" name="cooking" value="hoodVent">Hood Ventilation<br>
                    <div>
                        Number of agent cylinders per hood (e.g. single shot)<br>
                        <textarea form="cookingForm" id="CookingCanister" name="otherCookingCanister"></textarea>
                    </div>
                    <div>
                        Canister size and manufacturer e.g. 2.5 gal - ansul<br>
                        <textarea form="cookingForm" id="sizeCookingCanister" name="sizeCookingCanister"></textarea>
                    </div>
                    <div><input id="kitchenSprinklers" type="checkbox" name="cooking" value="kitchenSprinklers">Sprinklers at the ceiling?</div>
                    <div><input id="kratedExtinguisher" type="checkbox" name="cooking" value="kRatedExtinguisher">K-rated extinguishers?</div>
                </div>
                <br><br><div>
                    Ductwork cleaning<br>
                    <input type="radio" name="hoodCleaning" value="monthly">Monthly<br>
                    <input type="radio" name="hoodCleaning" value="quarterly">Quarterly<br>
                    <input type="radio" name="hoodCleaning" value="semiannually">Semiannually<br>
                    <input type="radio" name="hoodCleaning" value="annually">Annually<br>
                </div>
                <br><div id="cookingComments">
                    Additional Comments like walk in coolers with sprinklers, refrigeration used?<br>
                    How often is the special extinguishing system serviced? extinguishers?
                    <textarea form="cookingForm" id="cookingCommentsTextbox" name="cookingTextComments"></textarea>
                </div>
                <br><br><div>
                    Final Output<br>
                    <textarea form="cookingForm" id="dataCommercialCooking" name="cookingData"></textarea><br><br>
                    <textarea form="cookingForm" id="outputCookingText" name="outCookingText"></textarea>
                </div><br>
                <input type="button" value="Cooking Completed" id="cookingCompleted">
                <input type="submit" value="Send">
                <input type="reset" value="Reset">
            </form>   
        </div>